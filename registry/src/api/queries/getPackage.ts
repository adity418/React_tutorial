import type { PackageDetails } from "../types/packageDetails";

export async function getPackage(name: string) : Promise<PackageDetails> {
    const res = await fetch(`https://registery.npmjs.org/${name}`);
    const data = await res.json();

    return data as PackageDetails;
}