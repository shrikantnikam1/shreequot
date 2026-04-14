import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const generatePDF = async (element) => {
  try {
    // Enhanced html2canvas settings for mobile compatibility
    const canvas = await html2canvas(element, {
      scale: 2,
      allowTaint: true,
      useCORS: true,
      backgroundColor: "#ffffff",
      logging: false,
      windowHeight: element.scrollHeight || element.clientHeight,
      windowWidth: element.scrollWidth || element.clientWidth,
      removeContainer: true
    });
    
    // A4 page dimensions
    const pageWidth = 210; // mm
    const pageHeight = 297; // mm
    const margin = 5; // mm
    
    // Calculate image dimensions
    const availableWidth = pageWidth - (2 * margin);
    const imgWidth = availableWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    // Create PDF with proper page count
    const pdf = new jsPDF("p", "mm", "a4");
    const totalPages = Math.ceil(imgHeight / (pageHeight - 2 * margin));
    
    for (let page = 0; page < totalPages; page++) {
      if (page > 0) {
        pdf.addPage();
      }
      
      // Calculate the source rectangle for this page
      const sourceY = (canvas.height / totalPages) * page;
      const sourceHeight = canvas.height / totalPages;
      
      // Create a temporary canvas for this page section
      const pageCanvas = document.createElement("canvas");
      pageCanvas.width = canvas.width;
      pageCanvas.height = sourceHeight;
      
      const ctx = pageCanvas.getContext("2d");
      ctx.drawImage(canvas, 0, sourceY, canvas.width, sourceHeight, 0, 0, canvas.width, sourceHeight);
      
      const pageImgData = pageCanvas.toDataURL("image/png");
      const pageImgHeight = (sourceHeight * imgWidth) / canvas.width;
      
      pdf.addImage(pageImgData, "PNG", margin, margin, imgWidth, pageImgHeight);
    }
    
    pdf.save("quotation.pdf");
  } catch (error) {
    console.error("PDF generation error:", error);
    alert("Failed to generate PDF. Please try again.");
  }
};