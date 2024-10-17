import { rdfDereferencer, RdfDereferencer } from "rdf-dereference";

main();

async function main() {
    const { data } = await rdfDereferencer.dereference ('Emiel.ttl', { localFiles: true });
    data.on('data', (quad) => console.log(quad))
         .on('error', (error) => console.error(error))
         .on('end', () => console.log('All done!')); 
}




