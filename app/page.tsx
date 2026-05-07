import { getUploadUrl } from '@/actions/s3'
import ImageUploadForm from './_components/ImageUploadForm'
import execute from './actions/llm'

export default async function Home() {
	return (
		<div>
			<ImageUploadForm getUploadUrl={getUploadUrl} />
			<button
				className="m-2 rounded bg-emerald-300 px-2 py-1"
				onClick={execute}
			>
				Submit
			</button>
		</div>
	)
}
