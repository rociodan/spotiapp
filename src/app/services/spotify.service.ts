import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('Spotify services listo');
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAG9A0TRY_TeuOpwt0ioRHjaRdMf-Qo29AzsvbYS2jZcJ2_K3hvgLLt5o5pGnNnporZoVObCQ1KQesiq4Y'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers});
  }

  getArtista (termino: string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAG9A0TRY_TeuOpwt0ioRHjaRdMf-Qo29AzsvbYS2jZcJ2_K3hvgLLt5o5pGnNnporZoVObCQ1KQesiq4Y'
    });

    return this.http.get(`https://api.spotify.com/v1/search?query=${termino}&type=artist&offset=0&limit=15`, { headers});

  }
}
