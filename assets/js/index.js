var sumber = "../assets/json/index.json";

$.getJSON(sumber).then(function (data) {
    ditest.innerHTML = ""
    data.portoDocs.forEach(item => {
        ditest.innerHTML += `<div class="col mb-4">
        <div class="card">
                <img src="${item.foto}" class="card-img-top" alt="${item.foto}">
                <div class="card-body">
                    <h5 class="card-title">${item.judul}</h5>
                    <div class="row hargasize my-4">
                        <div class="col">
                            ${item.desk}
                        </div>
                    </div>
                    <a href="${item.link}" class="btn btn-success w-100">
                        <i class="bi bi-eye"></i> Lihat
                    </a>
                </div>
            </div>
        </div>`
    })
}) 