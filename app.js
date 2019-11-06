docRef = "Test123";
  const inputTextField = document.querySelector("#countryname");
  const addButton = document.querySelector("#addButton");
  addButton.addEventListener("click", writeCountry);

function writeCountry(){
	const countryToSave = inputTextField.value;
	console.log(countryToSave + " will be saved");
	docRef = firestore.doc(docRef + "/" + countryToSave);
	docRef.set({
	 Name: countryToSave
 }).then(function() {
	 console.log("Successfully saved");
 }).catch(function (error) {
console.log(error);
 });
}
