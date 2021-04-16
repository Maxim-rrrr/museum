import { createSchema, Type, typedModel, ExtractDoc } from 'ts-mongoose';


const heroSection = createSchema(
  {
    type: Type.number({ require: true }),
    content: Type.object({ require: true }),
    additionallyTop: Type.array({ default: [] }),
    additionallyBottom: Type.array({ default: [] }),
  }
)


export type heroSectionSchema = ExtractDoc<typeof heroSection>
export const HeroSection = typedModel("Setting", heroSection);