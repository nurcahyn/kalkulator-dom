function hitung() {
	var angka1 = parseInt(document.getElementById("angka1").value);
	var angka2 = parseInt(document.getElementById("angka2").value);
	var operator = document.getElementById("operator").value;
	var hasil = 0;

	switch (operator) {
		case "tambah":
			hasil = angka1 + angka2;
			break;
		case "kurang":
			hasil = angka1 - angka2;
			break;
		case "kali":
			hasil = angka1 * angka2;
			break;
		case "bagi":
			hasil = angka1 / angka2;
			break;
		default:
			alert("Operator tidak valid!");
	}

	document.getElementById("hasil").value = hasil;
}

function reset() {
	document.getElementById("angka1").value = "";
	document.getElementById("angka2").value = "";
	document.getElementById("operator").value = "tambah";
	document.getElementById("hasil").value = "";
}
