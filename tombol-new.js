function pdfHTML() {
    var pembeli = $(".nama-pembeli").text();
	var doc = new jsPDF();
	var elementHTML = $('.body-pembeli').html();
	var specialElementHandlers = {
		'.display-none': function (element, renderer) {
			return true;
		}
	};
	doc.fromHTML(elementHTML, 15, 15, {
        'width': 170,
        'elementHandlers': specialElementHandlers
    });
	
	// Save the PDF
	doc.save(pembeli+'.pdf');
}
$(".tombol-invoice").click(pdfHTML);
