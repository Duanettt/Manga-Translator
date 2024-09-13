import React from 'react'

const Instructions = () => {
  return (
    <div className="">
      <h1 className="font-GothamBold text-xl underline pb-2">Step-by-Step Guide</h1>
      <div>
        <ol className="flex flex-col gap-2">
          <li className="font-GothamBook"><strong>1. Prepare your files</strong>
            <p>File Format: Ensure your manga panels are in a compatible format (JPG, PNG, or PDF).</p>
            <p>Quality: High-resolution images yield the best translation results.</p>
          </li>
          <li className="font-GothamBook">2. <strong>Select Your Manga Panels</strong>
          <p>Click on the "Choose a file" button.</p>
          <p>Select the files from your device that you wish to upload.</p>
          </li>
          <li className="font-GothamBook"><strong>3. Submit Your Files</strong>
          <p>Once selected, the file names will be displayed.</p>
          <p>Click the "Upload" button to submit your files for translation.</p>
          </li>
          <li className="font-GothamBook"><strong>4. Enter Translation Details</strong>
          <p>Language: Select "Japanese" from the language dropdown menu.</p>
          </li>
          <li className="font-GothamBook"><strong>5. Review and Confirm</strong>
          <p>Double-check the details and files you've uploaded.</p>
          <p>Click "Confirm" to proceed with the translation request.</p>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Instructions