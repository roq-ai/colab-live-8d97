import * as yup from 'yup';

export const streamValidationSchema = yup.object().shape({
  platform: yup.string().required(),
  status: yup.string().required(),
  organization_id: yup.string().nullable(),
});
