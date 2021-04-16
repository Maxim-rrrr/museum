import { createSchema, Type, typedModel, ExtractDoc } from 'ts-mongoose';


const heroSection = createSchema(
  {
    type: Type.number({ require: true }),
    content: {
      text: Type.string(),
      text1: Type.string(),
      text2: Type.string(),
      img: Type.string(),
      img1: Type.string(),
      img2: Type.string(),
    },
    additionallyTop: Type.array({ default: [] }).of(Type.string()),
    additionallyBottom: Type.array({ default: [] }).of(Type.string()),
  }
)


export type heroSectionSchema = ExtractDoc<typeof heroSection>
export const HeroSection = typedModel("HeroSection", heroSection);