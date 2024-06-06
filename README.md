# facebook_addressbook_to_vcf_using_Js
The script reads an HTML file, extracts contact names and phone numbers, converts them into VCF format, and saves them to a file named contacts.vcf.

Prerequisites
-Node.js
-cheerio package


Instructions:

-Ensure you have Node.js installed. If not, download and install it from Node.js.
-Create a new directory and navigate into it.
-Run npm init -y to create a package.json file.
-Run npm install cheerio to install the cheerio package.
-Save the script above as extract_contacts.js.
-Place your HTML file (your_address_books.html) in the same directory as the script.
-Run the script using node extract_contacts.js.

Detailed Steps:

-Initialization: Ensure you are in the directory where you want to run the script.
-Install Dependencies: Run npm install cheerio to install the required package.
-Save Script: Save the script code above in a file named extract_contacts.js.
-Run Script: Execute the script with node extract_contacts.js.
-This updated script includes additional debugging statements:

-It prints the first 1000 characters of the HTML content to verify the file is being loaded correctly.
-It logs the number of .cnt div elements found.
-It logs if no contact name is found for a given div index.
-It prints the extracted contacts and the generated VCF content before saving it to the file.
-This should help identify where the issue lies in the extraction and file generation process.

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

Step 1 Clone the repository:
git clone https://github.com/yourusername/contact-extractor.git
cd contact-extractor

step 2 Install dependencies:
npm install cheerio

Usage
Place your HTML file in the directory:
Ensure your HTML file (your_address_books.html) is in the same directory as the script.

step 3 Run the script:
node extract_contacts.js

Debugging:
-The script prints the first 1000 characters of the HTML content to verify the file is being loaded correctly.
-It logs the number of .cnt div elements found.
-It logs if no contact name is found for a given div index.
-It prints the extracted contacts and the generated VCF content before saving it to the file.


********************************************************************************************************************************************************
Most Important:
replace the element name with div to your files eleemnt and put .class name in this code :
for ex-
if element is td in your html file replace the div with your td and class name with your class name 
 const contactNameElem = $(element).find('div.classname'); =>  const contactNameElem = $(element).find('td.name');




