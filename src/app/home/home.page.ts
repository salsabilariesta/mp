import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nomor_wa = ''
  pesan_wa = ''

  nomor_tele = ''
  pesan_tele = ''

  email = ''
  pesan_email = ''

  constructor() {}

  ngOnInit() {}

  kirimKeWhatsApp() {
    location.href = "https://wa/me/" + this.nomor_wa + "?text" + this.pesan_wa
  }
  kirimKeTelegram() {
    location.href = "https://t.me/msg?to=" + this.nomor_tele + "?text=" + this.pesan_tele
  }
  kirimKeEmail() {
    location.href = "mailto:" + this.email + "?body=" + this.pesan_email
  }
}
