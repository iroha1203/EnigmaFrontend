import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";
import { EnigmaRequest } from "../models/enigma";

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  constructor(private httpClient: HttpClient) {
  }

  postEnigma(body: EnigmaRequest): Promise<string> {
    return lastValueFrom(
      this.httpClient.post("/api/enigma", body, {responseType: "text"})
    );
  }
}
