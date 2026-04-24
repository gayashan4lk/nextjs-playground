import { getUploadUrl } from '@/actions/s3'
import ImageUploadForm from './_components/ImageUploadForm'

export default async function Home() {
	return (
		<div>
			<ImageUploadForm getUploadUrl={getUploadUrl} />
		</div>
	)
}
