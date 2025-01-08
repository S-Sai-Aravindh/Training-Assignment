import { Component } from '@angular/core';

@Component({
  selector: 'app-toggleimg',
  imports: [],
  templateUrl: './toggleimg.component.html',
  styleUrl: './toggleimg.component.css'
})
export class ToggleimgComponent {
   switchImgs(): void {
    const imgElement = document.getElementById("img1") as HTMLImageElement | null;
    const titleElement = document.getElementById("title1") as HTMLElement | null;

    if (!imgElement || !titleElement) {
        console.error("Image or Title element not found");
        return;
    }

    const val: string = imgElement.alt;
    console.log(val);

    if (val === "Zoro") {
        imgElement.src = "./robin.jpg";
        imgElement.alt = "Sanji";
        titleElement.innerHTML = "Robin";
    } else {
        imgElement.src = "./zoro.png";
        imgElement.alt = "Zoro";
        titleElement.innerHTML = "Zoro";
    }
}

 switchimg2(vals: string): void {
  const imgElement = document.getElementById("img2") as HTMLImageElement | null;
  const titleElement = document.getElementById("imgtitle") as HTMLElement | null;

  if (!imgElement || !titleElement) {
      console.error("Image or Title element not found");
      return;
  }

  if (vals === "Sanji") {
      imgElement.src = "./sanji.jpg";
      titleElement.innerHTML = "Vinsmoke Sanji";
  } else if (vals === "Zoro") {
      imgElement.src = "./zoro.png";
      titleElement.innerHTML = "Roronoa Zoro";
  } else if (vals === "Luffy") {
      imgElement.src = "./luffy.jpg";
      titleElement.innerHTML = "Monkey . D . Luffy";
  } else {
      imgElement.src = "./robin.jpg";
      titleElement.innerHTML = "Nico Robin";
  }
}


}
