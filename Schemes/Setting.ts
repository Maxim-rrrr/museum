import { createSchema, Type, typedModel, ExtractDoc } from 'ts-mongoose';


const settingSchema = createSchema(
  {
    type: Type.string({ required: true }),
    value: Type.string({ required: true }),
  },
  { timestamps: { createdAt: true } }
)


export type settingSchema = ExtractDoc<typeof settingSchema>
export const Setting = typedModel("Setting", settingSchema);