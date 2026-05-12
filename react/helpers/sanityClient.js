import { createClient } from '@sanity/client'

const client = createClient({
	projectId: 'q4t5mfuq',
	dataset: 'production',
	apiVersion: '2026-05-12',
	token: 'skgnM0VpgKhThJPYuoOlvAgk8twR6UPxtPIst2GEozZ68Val03e8TbusX7Sps6Siak6l3LvcYTU3IERDSwp6eRofljBN7o8wnxIzjVGLK047VZrlhQmdlrMRtAM72HM6SNmqw8PW0SR2L16CSau5xMD28jXb771I5pLdIV5gcLVeY6p1rlLv',
	useCdn: false,
})

export default client
