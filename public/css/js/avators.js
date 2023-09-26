//source: https://www.youtube.com/watch?v=lzK8vM_wdoY

const image_input =  document.querySelector("#file");
var uploaded_image = "" ;

image_input.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        document.querySelector("#display_image").src = uploaded_image;
    });
    reader.readAsDataURL(this.files[0]);

})