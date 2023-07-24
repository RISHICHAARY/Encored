import ReactDom from 'react-dom';

import '../../Styles/Popup.css';
import '../../Styles/Resume.css';

export default function ResumeDownloadPage({ open , onClose , Name , Email , Mobile , Gender , Dob , Address , Education , Skills , Certifications }){

    const styles = {
		intextfont:{
            'font-family': 'sans-serif',
            padding: '16px',
            'text-align': 'left'
        },
        
        NameDiv:{
            'border-left': '12.8px solid black',
            'margin-bottom': '1rem',
            'padding-left': '3.2px',
        },
        
        p:{
            margin: '0.1rem',
        },
        
        horline:{
            'border-top': '1px solid rgb(0, 0, 0)',
            padding: '6.4px',
            'text-transform': 'capitalize'
        },
        padit:{
            'padding-left': '16px',
        },
        bolded:{
            'text-decoration': 'solid',
            'font-size': 'large',
            'margin-top': '16px',
            'text-transform': 'uppercase'
        },
        PopupResumeBg:{
            'background-color': 'white',
            'min-height': '7in',
            'max-width': '5in',
            padding: '16px 32px',
            'border-radius': '32px',    
            margin: '0.5% auto',
            position: 'relative',
            'font-family': 'sans-serif',
            'text-align': 'left'
        }
	};

    const downloadPdfDocument = async () => {
        let printContents = document.getElementById('pdf').innerHTML;
        let originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    };

    return ReactDom.createPortal(
    <div className='PopupBase'>
        <div className='PopupCenterer'>
            <button className='ButtonBasics Download' onClick={()=>{downloadPdfDocument()}}>Download <i class="fa-solid fa-arrow-down"></i></button>
            <button className='ButtonBasics Close' onClick={onClose}><i class="fa-solid fa-xmark"></i></button>
            <div style={styles.PopupResumeBg} id='pdf'>
                <div style={styles.NameDiv}>
                    <p style={styles.bolded}>{Name}</p>
                    <p>{Gender}</p>
                    <p>{Dob}</p>
                </div>
                <p>{Mobile}</p>
                <p>{Email}</p>
                <p>{Address}</p>
                <p style={styles.bolded}>EDUCATION</p>
                <p style={styles.horline}>{Education}</p>
                <p style={styles.bolded}>SKILLS</p>
                <p style={styles.horline}>{Skills}</p>
                <p style={styles.bolded}>CERTIFICATIONS</p>
                <p style={styles.horline}>{Certifications}</p>
                {/*<ul class="horline padit">
                    <li>Python 101 for Data Science</li>
                    <li>Data Analytics Virtual Internship</li>
                    <li>AI-ML Virtual Internship</li>
                    <li>AWS Cloud Foundations</li>
                    <li>HTML,CSS</li>
                </ul>*/}
            </div>
        </div>
    </div>,
    document.getElementById( 'popup' )
    )
}