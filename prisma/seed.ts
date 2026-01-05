import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Create default admin user
  const hashedPassword = await bcrypt.hash(
    process.env.ADMIN_PASSWORD || 'ChangeThisPassword123!',
    10
  )

  const admin = await prisma.user.upsert({
    where: { email: process.env.ADMIN_EMAIL || 'admin@ovuxbiotech.com' },
    update: {},
    create: {
      email: process.env.ADMIN_EMAIL || 'admin@ovuxbiotech.com',
      password: hashedPassword,
      name: 'Admin User',
      role: 'ADMIN',
      isActive: true,
    },
  })

  console.log('Created admin user:', admin.email)

  // Create categories
  const categories = [
    {
      name: 'Chromatography & Analytical',
      slug: 'chromatography-analytical',
      description: 'HPLC columns, GC columns, and analytical chromatography equipment and consumables.',
      order: 1,
    },
    {
      name: 'Laboratory Equipment',
      slug: 'laboratory-equipment',
      description: 'Laboratory instruments, balances, pumps, detectors, and analytical equipment.',
      order: 2,
    },
    {
      name: 'Pharma Production Support',
      slug: 'pharma-production-support',
      description: 'Pharmaceutical production accessories, tubing, filtration units, and manufacturing support equipment.',
      order: 3,
    },
    {
      name: 'Custom Sourcing',
      slug: 'custom-sourcing',
      description: 'Custom sourcing solutions for specialized pharmaceutical and laboratory equipment needs.',
      order: 4,
    },
  ]

  for (const category of categories) {
    const created = await prisma.category.upsert({
      where: { slug: category.slug },
      update: category,
      create: category,
    })
    console.log('Created category:', created.name)
  }

  console.log('Seeding completed!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

