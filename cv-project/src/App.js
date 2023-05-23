import React, { Component } from "react";
import CV from './components/CV';
import "./styles/styles.css";

//
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";


export default class Export extends Component {
  constructor(props) {
    super(props);
  }
//
printDocument() {
  const input = document.getElementById('divToPrint');
  html2canvas(input)
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'JPEG', 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    })
  ;
}

class App extends Component {
  render() {
    return (

<div>
      <div className="mb5">
        <button onClick={this.printDocument}>Print</button>
      </div>
      <div id="divToPrint" className="mt4" {...css({
        backgroundColor: '#f5f5f5',
        width: '210mm',
        minHeight: '297mm',
        marginLeft: 'auto',
        marginRight: 'auto'
      })}>

      <div id="App">
          <CV />
      </div>
</div>
      </div>
    )
  }
}

export default App