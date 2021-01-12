import 'reflect-metadata'
import app from './index'

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`API - Feira online | PORT: ${PORT}`))