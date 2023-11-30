import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = '324266rthcgbnzgy5463q62zfdg';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);