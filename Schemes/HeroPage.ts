import { createSchema, Type, typedModel, ExtractDoc } from 'ts-mongoose';


const heroPage = createSchema(
  {
    status: Type.string({ required: true }),
    email: Type.string({ required: true }),
    
    nameHero: Type.string({ required: true }),
    sections: Type.array({ required: true })
  },
  { timestamps: { createdAt: true } }
)


export type heroPageSchema = ExtractDoc<typeof heroPage>
export const HeroPage = typedModel("Setting", heroPage);