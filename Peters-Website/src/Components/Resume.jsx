import {Document, Page, pdfjs} from 'react-pdf';
import APResume from '../Assets/APResume.pdf';
import '../Styles/resume.css'
import { useState } from 'react'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

function Resume () {
    // const [numPages, setNumPages] = useState()
    // const onDocumentLoadSuccess = ({ numPages }) => {
    //     setNumPages(numPages);
    // }



    return (
        <div className="Resume">
            <img src=""></img>
            <header> Welcome to where innovation and Design meets Human Resources </header>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt amet assumenda recusandae animi voluptatibus quos ab accusantium asperiores veritatis officia dolore laboriosam tenetur, magnam maxime quae repudiandae facilis quibusdam id. </p>

        </div>
     
            // {/* <Document className="resumeimg" file={APResume} onLoadSuccess={onDocumentLoadSuccess}
            //       onLoadError={console.error}>
            //         {Array.from(new Array(numPages), (el, index) => (
            //         <Page key={`page_${index + 1}`} pageNumber={index + 1} renderTextLayer={false} renderAnnotationLayer={false}/>
            //     ))} */}
            // {/* </Document> */}
            
        
    );   
}
export default Resume