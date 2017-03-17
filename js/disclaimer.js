function printDisclaimer() {
	var date = new Date();
	var disclaimerString = "© " + date.getFullYear() + " / Wolfgang - Website / Website Desenvolvido por Wolfgang de Almeida.";
	
	document.getElementById("disclaimer").innerHTML = (disclaimerString);
}