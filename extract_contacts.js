const fs = require('fs');
const cheerio = require('cheerio');

// Load the HTML file synchronously
const htmlFilePath = 'your_imported_contacts.html';
const vcfFilePath = 'contacts_1.vcf';

try {
    const htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

    // Parse the HTML content
    const $ = cheerio.load(htmlContent);

    // Ensure we have the correct HTML structure
    console.log("HTML content loaded:");
    console.log(htmlContent.slice(0, 1000)); // Print first 1000 characters of HTML content for verification

    // Extract contact names and phone numbers
    const contacts = [];
    const contactDivs = $('._a6-g');

    console.log(`Found ${contactDivs.length} contact divs.`);

    contactDivs.each((index, element) => {
        const contactNameElem = $(element).find('div.name');
        if (contactNameElem.length) {
            const contactName = contactNameElem.text().trim();
            const phoneNumbers = [];
            $(element).find('div.p_no').each((i, el) => {
                phoneNumbers.push($(el).text().trim());
            });

            if (phoneNumbers.length) {
                contacts.push({ name: contactName, numbers: phoneNumbers });
            }
        } else {
            console.log(`No contact name found in div index ${index}`);
        }
    });

    // Debugging: Print extracted contacts to ensure correct extraction
    console.log("Extracted contacts:");
    contacts.forEach(contact => {
        console.log(`Contact Name: ${contact.name}`);
        contact.numbers.forEach(number => {
            console.log(`Phone Number: ${number}`);
        });
    });

    // Generate VCF file content
    let vcfContent = '';
    contacts.forEach(contact => {
        vcfContent += 'BEGIN:VCARD\n';
        vcfContent += 'VERSION:3.0\n';
        vcfContent += `FN:${contact.name}\n`;
        contact.numbers.forEach(number => {
            vcfContent += `TEL;TYPE=CELL:${number}\n`;
        });
        vcfContent += 'END:VCARD\n\n';
    });

    // Debugging: Print the VCF content before writing to the file
    console.log("\nGenerated VCF content:");
    console.log(vcfContent);

    // Save to a VCF file
    fs.writeFileSync(vcfFilePath, vcfContent, 'utf8');
    console.log(`VCF file created successfully at ${vcfFilePath}`);

} catch (err) {
    console.error(`Error: ${err.message}`);
}
