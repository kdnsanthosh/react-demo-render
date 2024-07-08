import { useState , useEffect } from "react";
import Footer from "./Footer";

export const Qrcode=() => {
    const[img,setImg]=useState(""); 
    const[loading,setLoading]=useState(false);
    const[qrData,setQrData]=useState("");
    const[qrSize,setQrSize]=useState("");
//     //create  settheme using useEffect 
  const [theme, setTheme]= useState("green"); 
  const click = theme =>{
    setTheme(theme)
  }
  useEffect(()=>{
    document.body.style.background=theme
  },[theme]);

async function generateQr() {
    setLoading(true);
    try {
    const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`
     setImg(url);
    } catch (error) { 
        console.error("Error generating QR code", error) 
    }
    finally {
    setLoading(false);
    }
}
function downloadQr() {
    fetch(img)
    .then((response) => response.blob())
    .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download="qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
} 
//adding new resetData function & reset button feature
const resetData =() =>{
    setQrData("");
    setQrSize("");
    setImg("");
}
return(
<div className="app-container" >
<h1>QR CODE GENERATOR</h1>
{loading && <p>Please wait...</p>}
{img && <img src={img} className="img"/>}
<div>
    <label htmlFor="dataInput" className="input-label">
        Data For QR Code:
    </label>
    <input type="text" value={qrData} id="dataInput" placeholder="Enter the Data for Qr Code" onChange={(e) => setQrData(e.target.value)}/>
    <label htmlFor="sizeInput" className="input-label">
    Image Size (eg., 150):
    </label>
    <input type="text" value={qrSize} id="sizeInput" placeholder="Enter the image size" onChange={(e)=> setQrSize(e.target.value)} />
    <button className="theme-button" onClick={()=> {click("brown")}}>Theme</button>
    <button className="generate-button" disabled={loading} onClick={generateQr}>Generate QRCode</button>
    <button className="download-button" onClick={downloadQr}>Download QR code</button>
    <button className="reset-button" onClick={resetData}>Reset</button>
    </div>
<p className="footer"> <a1>  Designed by   </a1>   <a href="https://www.gurutech.in"> GuruTech </a> <Footer/> </p>
</div>
);
}