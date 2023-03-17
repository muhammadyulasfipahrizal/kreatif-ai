const submitButton = document.getElementById("submit-button");
const dropdownNada = document.querySelectorAll('.dropdown-nada');
const dropdownKreativitas = document.querySelectorAll('.dropdown-kreativitas');
const dropdownVariasi = document.querySelectorAll('.dropdown-variasi');
const editorBackButton = document.getElementById("editor-back");

//input
const inputJudul = document.getElementById("input-judul");
const inputDeskripsi = document.getElementById("input-deskripsi");
const inputKatakunci = document.getElementById("input-kata-kunci");
const inputPerusahaan = document.getElementById("input-perusahaan");
const inputAudiens = document.getElementById("input-audiens");
const inputProduk = document.getElementById("input-produk");
const inputWebsite = document.getElementById("input-website");
const inputDeskripsiperusahaan = document.getElementById("input-deskripsi-perusahaan");

// Define topik variable outside the event listener
let topik = "";

//caching
let remainingWordCredit = null;

// Declare a variable to hold the event listener function
let submitButtonHandler; 

// Declare the apiKeyValue variable at the top level
let apiKeyValue; 

// Declare the editor variable
let selectedTone = "senang";
let selectedKreativitas = "";
let selectedVariasi = "1 variasi";
let selectedVariasiNum = '';
let editor;


function dropdownEventListener(className, callback) {
  const elements = document.querySelectorAll(`.${className}`);
  elements.forEach(function(element) {
    element.addEventListener('click', function() {
      callback(this.textContent.trim());
    });
  });
}

function onToneSelected(tone) {
  selectedTone = tone;
}

function onKreativitasSelected(kreativitas) {
  selectedKreativitas = kreativitas;
}

function onVariasiSelected(variasi) {
  selectedVariasi = variasi;
  selectedVariasiNum = parseInt(variasi, 10);
}

dropdownEventListener('dropdown-nada', onToneSelected);
dropdownEventListener('dropdown-kreativitas', onKreativitasSelected);
dropdownEventListener('dropdown-variasi', onVariasiSelected);

//clear when click on back button
editorBackButton.addEventListener("click", function() {
    editor.setData("");
    inputJudul.value = "";
    inputDeskripsi.value = "";
    inputKatakunci.value = "";
    inputPerusahaan.value = "";
    inputAudiens.value = "";
    inputProduk.value = "";
    inputWebsite.value = "";
    inputDeskripsiperusahaan.value = "";
    topik = "";
  });

// Initialize the editor
ClassicEditor
.create( document.querySelector( '#editor' ), {
  height: 600 // set the desired height in pixels
} )
.then( newEditor => {
  editor = newEditor;
})
.catch( error => {
  console.error( error );
});