import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosResponse } from 'axios';

interface RecaptchaResponse {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  'error-codes': string[];
}

@Injectable()
export class RecaptchaService {
  private readonly RECAPTCHA_URL = 'https://www.google.com/recaptcha/api/siteverify';
  private RECAPTCHA_SECRET_KEY: string;

  constructor(private readonly configService: ConfigService) {
    this.RECAPTCHA_SECRET_KEY = this.configService.getOrThrow<string>('RECAPTCHA_SECRET_KEY');
  }

  async verifyRecaptcha(token: string, remoteIp?: string): Promise<boolean> {
    if (process.env.NODE_ENV === 'development') {
      return true;
    }

    const response: AxiosResponse<RecaptchaResponse> = await axios.post(this.RECAPTCHA_URL, null, {
      params: {
        secret: this.RECAPTCHA_SECRET_KEY,
        response: token,
        remoteip: remoteIp, // Optionally include the user's IP
      },
    });

    const responseData = response.data;

    if (!responseData.success) {
      throw new UnauthorizedException('Invalid reCAPTCHA token');
    }

    return true;
  }
}
