import pypandoc
import os

print("Starting Markdown to Docx conversion...")
try:
    pypandoc.convert_file('TOC_HOANG_HANDOVER.md', 'docx', outputfile='TOC_HOANG_HANDOVER.docx')
    print("Sucessfully converted TOC_HOANG_HANDOVER.md to DOCX")
except Exception as e:
    print(f"Error converting Handover: {e}")

try:
    pypandoc.convert_file('TOC_HOANG_TECHNICAL.md', 'docx', outputfile='TOC_HOANG_TECHNICAL.docx')
    print("Sucessfully converted TOC_HOANG_TECHNICAL.md to DOCX")
except Exception as e:
    print(f"Error converting Technical: {e}")

print("Done.")
