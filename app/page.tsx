import { getUploadUrl } from '@/actions/s3'
import ImageUploadForm from './_components/ImageUploadForm'
import execute from './actions/llm'

export default async function Home() {
	return (
		<div>
			<ImageUploadForm getUploadUrl={getUploadUrl} />
			<button onClick={execute}>Submit</button>
		</div>
	)
}
