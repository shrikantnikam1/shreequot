import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const generatePDF = async (element) => {
  try {
    const scale = Math.max(3, window.devicePixelRatio || 1);
    const canvas = await html2canvas(element, {
      scale,
      useCORS: true,
      backgroundColor: "#ffffff",
      logging: false,
      scrollX: -window.scrollX,
      scrollY: -window.scrollY,
      width: element.scrollWidth,
      height: element.scrollHeight,
      windowWidth: document.documentElement.clientWidth,
      windowHeight: document.documentElement.clientHeight,
    });
    
    const pageWidth = 210; // mm
    const pageHeight = 297; // mm
    const margin = 5; // mm
    
    const pdf = new jsPDF({ unit: "mm", format: "a4", compress: true });
    const pdfWidth = pageWidth - margin * 2;
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    const totalPages = Math.ceil(pdfHeight / (pageHeight - margin * 2));
    
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
      const pageImgHeight = (sourceHeight * pdfWidth) / canvas.width;
      
      pdf.addImage(pageImgData, "PNG", margin, margin, pdfWidth, pageImgHeight, undefined, "FAST");
    }
    
    pdf.save("quotation.pdf");
  } catch (error) {
    console.error("PDF generation error:", error);
    alert("Failed to generate PDF. Please try again.");
  }
};