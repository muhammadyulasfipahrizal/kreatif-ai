// article-generator
document.getElementById("article-generator").addEventListener("click", function() {
  apiKeyPromise.then(() => {
    // Remove the previous event listener, if any
    submitButton.removeEventListener("click", submitButtonHandler);
  
    // Add event listener to submit button
    submitButtonHandler = function() {
      const judul = inputJudul.value;
      const tone = selectedTone;
      const inputTopik1 = document.getElementById("input-topik-1").value;
      const inputTopik2 = document.getElementById("input-topik-2").value;
      const inputTopik3 = document.getElementById("input-topik-3").value;
      const inputTopik4 = document.getElementById("input-topik-4").value;
      const topik = [inputTopik1, inputTopik2, inputTopik3, inputTopik4].join(" ");
      const prompt = `buatlah artikel bernada ${tone} yang teroptimasi untuk seo yang berjudul ${judul} dan memuat subjudul berupa ${topik}`;
      generateContent(prompt, 200);
    };
  
    submitButton.addEventListener("click", submitButtonHandler);
  });
});

// paragraph-generator
document.getElementById("paragraph-generator").addEventListener("click", function() {
  apiKeyPromise.then(() => {
    // Remove the previous event listener, if any
    submitButton.removeEventListener("click", submitButtonHandler);
  
    // Add event listener to submit button
    submitButtonHandler = function() {
      const tone = selectedTone;  
      const variasi = selectedVariasi;
      const deksripsi = inputDeskripsi.value;
      const katakunci = inputKatakunci.value;
      const prompt = `buatlah ${variasi} paragraf tentang ${deksripsi} dengan nada ${tone} yang memuat kata kunci ${katakunci}`;
      generateContent(prompt, 200);
    };
  
    submitButton.addEventListener("click", submitButtonHandler);
  });
});

// bagian-blog-generator
document.getElementById("bagian-blog-generator").addEventListener("click", function() {
  apiKeyPromise.then(() => {
    // Remove the previous event listener, if any
    submitButton.removeEventListener("click", submitButtonHandler);
  
    // Add event listener to submit button
    submitButtonHandler = function() {
      const judul = inputJudul.value;
      const tone = selectedTone;
      const variasi = selectedVariasi;
      const inputTopik1 = document.getElementById("input-topik-1").value;
      const inputTopik2 = document.getElementById("input-topik-2").value;
      const inputTopik3 = document.getElementById("input-topik-3").value;
      const inputTopik4 = document.getElementById("input-topik-4").value;
      const topik = [inputTopik1, inputTopik2, inputTopik3, inputTopik4].join(" ");
      const prompt = `buatlah ${variasi} bagian blog tentang ${judul} dengan nada ${tone} yang memiliki subjudul ${topik}`;
      generateContent(prompt, 200);
    };
  
    submitButton.addEventListener("click", submitButtonHandler);
  });
});

// judul-blog-generator
document.getElementById("judul-blog-generator").addEventListener("click", function() {
  apiKeyPromise.then(() => {
    // Remove the previous event listener, if any
    submitButton.removeEventListener("click", submitButtonHandler);
  
    // Add event listener to submit button
    submitButtonHandler = function() {
      const tone = selectedTone;
      const variasi = selectedVariasi;
      const deksripsi = inputDeskripsi.value
      const prompt = `buatlah ${variasi} judul blog dengan nada ${tone} yang mendeskripsikan hal tentang ${deksripsi}`;
      generateContent(prompt, 200);
    };
  
    submitButton.addEventListener("click", submitButtonHandler);
  });
});

// ide-blog-generator
document.getElementById("ide-blog-generator").addEventListener("click", function() {
  apiKeyPromise.then(() => {
    // Remove the previous event listener, if any
    submitButton.removeEventListener("click", submitButtonHandler);
  
    // Add event listener to submit button
    submitButtonHandler = function() {
      const tone = selectedTone;
      const variasi = selectedVariasi;
      const deksripsi = inputDeskripsi.value
      const prompt = `buatlah ${variasi} ide blog dengan ${tone} yang mendeskripsikan ${deksripsi}`;
      generateContent(prompt, 200);
    };
  
    submitButton.addEventListener("click", submitButtonHandler);
  });
});

// ide-blog-generator
document.getElementById("pengantar-blog-generator").addEventListener("click", function() {
  apiKeyPromise.then(() => {
    // Remove the previous event listener, if any
    submitButton.removeEventListener("click", submitButtonHandler);
  
    // Add event listener to submit button
    submitButtonHandler = function() {
      const tone = selectedTone;
      const variasi = selectedVariasi;
      const judul = inputJudul.value;
      const deksripsi = inputDeskripsi.value
      const prompt = `buatlah ${variasi} pengantar blog dengan nada ${tone}, blog tersebut berjudul ${judul} 
      dan blog tersebut mendeskripsikan ${deksripsi}`;
      generateContent(prompt, 200);
    };
  
    submitButton.addEventListener("click", submitButtonHandler);
  });
});

// garisbesar-blog-generator
document.getElementById("garisbesar-blog-generator").addEventListener("click", function() {
  apiKeyPromise.then(() => {
    // Remove the previous event listener, if any
    submitButton.removeEventListener("click", submitButtonHandler);
  
    // Add event listener to submit button
    submitButtonHandler = function() {
      const tone = selectedTone;
      const variasi = selectedVariasi;
      const judul = inputJudul.value;
      const deksripsi = inputDeskripsi.value
      const prompt = `buatlah ${variasi} garis besar blog yang berjudul ${judul} dengan nada ${tone} yang mendeksripsikan  ${deksripsi}`;
      generateContent(prompt, 200);
    };
  
    submitButton.addEventListener("click", submitButtonHandler);
  });
});

// kesimpulan-blog-generator
document.getElementById("kesimpulan-blog-generator").addEventListener("click", function() {
  apiKeyPromise.then(() => {
    // Remove the previous event listener, if any
    submitButton.removeEventListener("click", submitButtonHandler);
  
    // Add event listener to submit button
    submitButtonHandler = function() {
      const tone = selectedTone;
      const variasi = selectedVariasi;
      const judul = inputJudul.value;
      const inputTopik1 = document.getElementById("input-topik-1").value;
      const inputTopik2 = document.getElementById("input-topik-2").value;
      const inputTopik3 = document.getElementById("input-topik-3").value;
      const inputTopik4 = document.getElementById("input-topik-4").value;
      const topik = [inputTopik1, inputTopik2, inputTopik3, inputTopik4].join(" ");
      const prompt = `buatlah ${variasi} kesimpulan blog yang berjudul ${judul} dengan nada ${tone}, blog tersebut memuat topik berupa ${topik}`;
      generateContent(prompt, 200);
    };
  
    submitButton.addEventListener("click", submitButtonHandler);
  });
});

// postbisnis-generator
document.getElementById("postbisnis-generator").addEventListener("click", function() {
  apiKeyPromise.then(() => {
    // Remove the previous event listener, if any
    submitButton.removeEventListener("click", submitButtonHandler);
  
    // Add event listener to submit button
    submitButtonHandler = function() {
      const tone = selectedTone;
      const variasi = selectedVariasi;
      const deskripsi = inputDeskripsi.value;
      const namaperusahaan = inputPerusahaan.value;
      const deskripsiperusahaan = inputDeskripsiperusahaan.value;
      const prompt = `buatlah ${variasi} post media sosial untuk bisnis ${deskripsiperusahaan} yang bernama ${namaperusahaan} 
      ,post bisnis ini mendeksripsikan ${deskripsi} dengan nada ${tone}`;
      generateContent(prompt, 200);
    };
  
    submitButton.addEventListener("click", submitButtonHandler);
  });
});

// post-pribadi-generator
document.getElementById("post-pribadi-generator").addEventListener("click", function() {
  apiKeyPromise.then(() => {
    // Remove the previous event listener, if any
    submitButton.removeEventListener("click", submitButtonHandler);
  
    // Add event listener to submit button
    submitButtonHandler = function() {
      const tone = selectedTone;
      const variasi = selectedVariasi;
      const deskripsi = inputDeskripsi.value;
      const prompt = `buatlah ${variasi} post media sosial untuk pribadi yang mendeksripsikan ${deskripsi} dengan nada ${tone} `;
      generateContent(prompt, 200);
    };
  
    submitButton.addEventListener("click", submitButtonHandler);
  });
});

// deskripsi-instagram-generator
document.getElementById("deskripsi-instagram-generator").addEventListener("click", function() {
  apiKeyPromise.then(() => {
    // Remove the previous event listener, if any
    submitButton.removeEventListener("click", submitButtonHandler);
  
    // Add event listener to submit button
    submitButtonHandler = function() {
      const tone = selectedTone;
      const variasi = selectedVariasi;
      const deskripsi = inputDeskripsi.value;
      const prompt = `buatlah ${variasi} deskripsi instagram tentang ${deskripsi} yang bernada ${tone} `;
      generateContent(prompt, 200);
    };
  
    submitButton.addEventListener("click", submitButtonHandler);
  });
});

// hastag-generator
document.getElementById("hastag-generator").addEventListener("click", function() {
  apiKeyPromise.then(() => {
    // Remove the previous event listener, if any
    submitButton.removeEventListener("click", submitButtonHandler);
  
    // Add event listener to submit button
    submitButtonHandler = function() {
      const tone = selectedTone;
      const variasi = selectedVariasi;
      const katakunci = inputKatakunci.value;
      const prompt = `buatlah ${variasi} hastag yang diambil dari kata kunci ${katakunci} dengan nada ${tone}`;
      generateContent(prompt, 200);
    };
  
    submitButton.addEventListener("click", submitButtonHandler);
  });
});

// twitter-threads-generator
document.getElementById("twitter-threads-generator").addEventListener("click", function() {
  apiKeyPromise.then(() => {
    // Remove the previous event listener, if any
    submitButton.removeEventListener("click", submitButtonHandler);
  
    // Add event listener to submit button
    submitButtonHandler = function() {
      const tone = selectedTone;
      const variasi = selectedVariasi;
      const deskripsi = inputDeskripsi.value;
      const prompt = `buatlah ${variasi} twitter thread yang mendeskripsikan ${deskripsi} dengan nada ${tone}`;
      generateContent(prompt, 200);
    };
  
    submitButton.addEventListener("click", submitButtonHandler);
  });
});

// tweet-generator
document.getElementById("tweet-generator").addEventListener("click", function() {
  apiKeyPromise.then(() => {
    // Remove the previous event listener, if any
    submitButton.removeEventListener("click", submitButtonHandler);
  
    // Add event listener to submit button
    submitButtonHandler = function() {
      const tone = selectedTone;
      const variasi = selectedVariasi;
      const deskripsi = inputDeskripsi.value;
      const prompt = `buatlah ${variasi} tweet tweeter yang mendeskripsikan ${deskripsi} dengan nada ${tone} `;
      generateContent(prompt, 200);
    };
  
    submitButton.addEventListener("click", submitButtonHandler);
  });
});

// judul-situs-generator
document.getElementById("judul-situs-generator").addEventListener("click", function() {
  apiKeyPromise.then(() => {
    // Remove the previous event listener, if any
    submitButton.removeEventListener("click", submitButtonHandler);
  
    // Add event listener to submit button
    submitButtonHandler = function() {
      const tone = selectedTone;
      const variasi = selectedVariasi;
      const audiens = inputAudiens.value;
      const produk = inputProduk.value;
      const deskripsi = inputDeskripsi;
      const prompt = `buatlah ${variasi} judul website yang menargetkan audiens ${audiens} dan website ini menjual 
      ${produk} yang merupakan ${deskripsi}, judul website ini bernada ${tone}`;
      generateContent(prompt, 200);
    };
  
    submitButton.addEventListener("click", submitButtonHandler);
  });
});

// subjudul-situs-generator
document.getElementById("subjudul-situs-generator").addEventListener("click", function() {
  apiKeyPromise.then(() => {
    // Remove the previous event listener, if any
    submitButton.removeEventListener("click", submitButtonHandler);
  
    // Add event listener to submit button
    submitButtonHandler = function() {
      const tone = selectedTone;
      const variasi = selectedVariasi;
      const audiens = inputAudiens.value;
      const produk = inputProduk.value;
      const deskripsi = inputDeskripsi;
      const prompt = `buatlah ${variasi} subjudul website yang menargetkan audiens ${audiens} dan website ini menjual
      ${produk} yang merupakan ${deskripsi}, judul website ini bernada ${tone}`;
      generateContent(prompt, 200);
    };
  
    submitButton.addEventListener("click", submitButtonHandler);
  });
});

// deskripsiurl-situs-generator
document.getElementById("deskripsiurl-situs-generator").addEventListener("click", function() {
  apiKeyPromise.then(() => {
    // Remove the previous event listener, if any
    submitButton.removeEventListener("click", submitButtonHandler);
  
    // Add event listener to submit button
    submitButtonHandler = function() {
      const tone = selectedTone;
      const variasi = selectedVariasi;
      const website = inputWebsite.value;
      const katakunci = inputKatakunci.value;
      const prompt = `buatlah ${variasi} deskripsi website yang bernama ${website} yang memiliki kata kunci ${katakunci} dengan nada ${tone}`;
      generateContent(prompt, 200);
    };
  
    submitButton.addEventListener("click", submitButtonHandler);
  });
});

// faq-situs-generator
document.getElementById("faq-situs-generator").addEventListener("click", function() {
  apiKeyPromise.then(() => {
    // Remove the previous event listener, if any
    submitButton.removeEventListener("click", submitButtonHandler);
  
    // Add event listener to submit button
    submitButtonHandler = function() {
      const tone = selectedTone;
      const variasi = selectedVariasi;
      const website = inputWebsite.value;
      const katakunci = inputKatakunci.value;
      const prompt = `buatlah ${variasi} faq website bernama ${website} yang memiliki kata kunci ${katakunci} dengan nada ${tone} beserta jawabanya`;
      generateContent(prompt, 200);
    };
  
    submitButton.addEventListener("click", submitButtonHandler);
  });
});

// testimoni-situs-generator
document.getElementById("testimoni-situs-generator").addEventListener("click", function() {
  apiKeyPromise.then(() => {
    // Remove the previous event listener, if any
    submitButton.removeEventListener("click", submitButtonHandler);
  
    // Add event listener to submit button
    submitButtonHandler = function() {
      const tone = selectedTone;
      const variasi = selectedVariasi;
      const produk = inputProduk.value;
      const deskripsi = inputDeskripsi.value;
      const prompt = `buatlah ${variasi} testimoni produk bernama ${produk} yang medeskripsikan ${deskripsi} dengan nada ${tone}`;
      generateContent(prompt, 200);
    };
  
    submitButton.addEventListener("click", submitButtonHandler);
  });
});

// tentangkami-situs-generator
document.getElementById("tentangkami-situs-generator").addEventListener("click", function() {
  apiKeyPromise.then(() => {
    // Remove the previous event listener, if any
    submitButton.removeEventListener("click", submitButtonHandler);
  
    // Add event listener to submit button
    submitButtonHandler = function() {
      const tone = selectedTone;
      const variasi = selectedVariasi;
      const audiens = inputAudiens.value;
      const produk = inputProduk.value;
      const deskripsi = inputDeskripsi.value;
      const prompt = `buatlah ${variasi} bagian tentang kami untuk produk ${produk} yang merupakan ${deskripsi} yang menargetkan audiens ${audiens}  
      dengan nada${tone}`;
      generateContent(prompt, 200);
    };
  
    submitButton.addEventListener("click", submitButtonHandler);
  });
});

// cta-situs-generator
document.getElementById("cta-situs-generator").addEventListener("click", function() {
  apiKeyPromise.then(() => {
    // Remove the previous event listener, if any
    submitButton.removeEventListener("click", submitButtonHandler);
  
    // Add event listener to submit button
    submitButtonHandler = function() {
      const tone = selectedTone;
      const variasi = selectedVariasi;
      const audiens = inputAudiens.value;
      const produk = inputProduk.value;
      const deskripsi = inputDeskripsi.value;
      const prompt = `buatlah ${variasi} cta atau panggilan ke tindakan untuk target audiens ${audiens}, cta ini adalah untuk produk 
      ${produk} bernama yang merupakan ${deskripsi}, buatlah cta tersebut dengan nada ${tone}`;
      generateContent(prompt, 200);
    };
  
    submitButton.addEventListener("click", submitButtonHandler);
  });
});

// judul-video-generator
document.getElementById("judul-video-generator").addEventListener("click", function() {
  apiKeyPromise.then(() => {
    // Remove the previous event listener, if any
    submitButton.removeEventListener("click", submitButtonHandler);
  
    // Add event listener to submit button
    submitButtonHandler = function() {
      const tone = selectedTone;
      const variasi = selectedVariasi;
      const deskripsi = inputDeskripsi.value;
      const prompt = `buatlah ${variasi} judul video yang mendeksripsikan ${deskripsi} dengan nada ${tone} `;
      generateContent(prompt, 200);
    };
  
    submitButton.addEventListener("click", submitButtonHandler);
  });
});

// skrip-video-generator
document.getElementById("skrip-video-generator").addEventListener("click", function() {
  apiKeyPromise.then(() => {
    // Remove the previous event listener, if any
    submitButton.removeEventListener("click", submitButtonHandler);
  
    // Add event listener to submit button
    submitButtonHandler = function() {
      const tone = selectedTone;
      const variasi = selectedVariasi;
      const audiens = inputAudiens.value;
      const deskripsi = inputDeskripsi.value;
      const prompt = `buatlah ${variasi} skrip intro video untuk target audiens ${audiens} yang mendeskripsikan ${deskripsi} dengan nada ${tone} `;
      generateContent(prompt, 200);
    };
  
    submitButton.addEventListener("click", submitButtonHandler);
  });
});

// deskripsi-video-generator
document.getElementById("deskripsi-video-generator").addEventListener("click", function() {
  apiKeyPromise.then(() => {
    // Remove the previous event listener, if any
    submitButton.removeEventListener("click", submitButtonHandler);
  
    // Add event listener to submit button
    submitButtonHandler = function() {
      const tone = selectedTone;
      const variasi = selectedVariasi;
      const judul = inputJudul.value
      const prompt = `buatlah ${variasi} deskripsi untuk video yang berjudul ${judul} dengan nada ${tone} `;
      generateContent(prompt, 200);
    };
  
    submitButton.addEventListener("click", submitButtonHandler);
  });
});