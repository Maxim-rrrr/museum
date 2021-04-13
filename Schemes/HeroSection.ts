import { createSchema, Type, typedModel, ExtractDoc } from 'ts-mongoose';


const heroSection = createSchema(
  {
    type: Type.number({ require: true }),
    content: Type.array({ require: true }),
    additionallyTop: Type.array(),
    additionallyBottom: Type.array(),
  }
)


export type heroSection = ExtractDoc<typeof heroSection>
export const HeroSection = typedModel("Setting", heroSection);