import {Document, Page, pdfjs} from 'react-pdf';
import AResume from '../Assets/APResume.pdf';
import '../Styles/resume.css'


function Resume () {




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