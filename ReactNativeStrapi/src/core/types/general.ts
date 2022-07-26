/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import { Author, Post } from "./entities";

/* -------------------------------------------------------------------------- */
/*                                General Types                               */
/* -------------------------------------------------------------------------- */

export type ImageStrapi = {
    data: {
        id: number;
        attributes: {
          url: string;
        //   formats: {
        //     [Property in ImageStrapiFormat]: ImageFormatStrapiDTO
        //   }
        }
      }
}

export type Attribute = {
    id: number,
    attributes: Post | Author,
}