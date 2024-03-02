import { olimpiadService } from '$src/lib/api/olimpiads'

export async function load({ params }: { params: { olimpiadId: string } }) {
  const result = await olimpiadService.getOlimpiad(params.olimpiadId)

  return {
    olimpiadId: params.olimpiadId,
    selectedOlimpiad: result,
  }
}
