import BrandFormPage from "@/components/form/Brand/page";
import { getBrand, getBrandTags } from "@/server/queries";

export default async function AdminBrandPage({
  params,
}: {
  params: { id: string };
}) {
  const brand = await getBrand({ id: params.id });
  const tags = await getBrandTags({ id: params.id });
  return (
    <div className="p-4 bg-white rounded text-left">
      <BrandFormPage
        editId={params.id}
        defaultValues={{
          imageUrl: brand?.imageUrl || undefined,
          name: brand?.name || undefined,
          price: brand?.price || undefined,
          marked: brand?.marked ? (`${brand.marked}` as "0" | "1") : "0",
          location: brand?.location
            ? {
                value: brand?.location?.id || "",
                label: brand?.location?.name || "",
              }
            : undefined,
          markReason: brand?.mark_reason || undefined,
          ownedBy: brand?.owned_by
            ? {
                value: brand?.owned_by?.id || "",
                label: brand?.owned_by?.name || "",
              }
            : undefined,
          tags: tags.map(tag => ({
            value: tag?.tag?.id ?? "",
            label: tag?.tag?.name ?? "",
          })),
        }}
      />
    </div>
  );
}
