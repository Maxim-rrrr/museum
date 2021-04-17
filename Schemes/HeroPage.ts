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
    
    nameHero: Type.string({ required: true }),
    surnameHero: Type.string({ required: true }),
    patronymicHero: Type.string({ required: true }),
    sections: Type.array({ required: true }).of(Type.string())
  },
  { timestamps: { createdAt: true } }
)


export type heroPageSchema = ExtractDoc<typeof heroPage>
export const HeroPage = typedModel("HeroPage", heroPage);