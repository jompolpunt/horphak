
import PropertyDetailPage from "@/components/property-detail-page";
import { getDb } from "@/lib/db";

export default async function PropertyPage({ params }: { params: { id: string } }) {
  const db = await getDb();
  const property = await db.get("SELECT * FROM condos WHERE id = ? UNION SELECT * FROM daily_apartments WHERE id = ?", params.id, params.id);

  return <PropertyDetailPage property={property} />;
}
