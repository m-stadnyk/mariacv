import schema from './assets/talent.schema.json'
import Ajv from "ajv/dist/2020";
import addFormats from "ajv-formats";


function validateResource(talent) {
    const ajv = new Ajv({ allErrors: true });
    addFormats(ajv)
    const isValid = ajv.validate(schema, talent);
    if (!isValid) {
        console.error('Validation errors:', ajv.errorsText());
    } else {
        console.log('JSON data is valid');
    }
}


export {validateResource}