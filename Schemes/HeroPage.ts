import { createSchema, Type, typedModel, ExtractDoc } from 'ts-mongoose';

/** Статусы:
 * approved
 * verification
 * rejected
 */

const heroPage = createSchema(
  {
    status: Type.string({ required: true }),
    email: Type.string({ required: true }),
    whoWrote: Type.string(),
    byWhom: Type.string(),
    
    nameHero: Type.string({ required: true }),
    surnameHero: Type.string({ required: true }),
    patronymicHero: Type.string(),
    sections: Type.array({ required: true }).of({
      type: Type.number({ require: true }),
      content: {
        text: Type.string(),
        text1: Type.string(),
        text2: Type.string(),
        img: Type.string(),
        img1: Type.string(),
        img2: Type.string(),
        img_sign: Type.string(),
        img_sign1: Type.string(),
        img_sign2: Type.string(),
        title: Type.string(),
        subtitle: Type.string(),
      }
    })
  },
  { timestamps: { createdAt: true } }
)


export type heroPageSchema = ExtractDoc<typeof heroPage>
export const HeroPage = typedModel("HeroPage", heroPage);