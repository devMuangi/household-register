import { NextApiRequest, NextApiResponse} from 'next';
import prisma from '../../../../lib/prisma'

export default async function getChu(req: NextApiRequest, res: NextApiResponse){
    const chus: object | null = await prisma.chu.findMany({
        orderBy:{
          id: 'desc' ,
  
        },
          select: {
            id:true,
            name:true,
            code:true,
            location:true,
                    
          },
         
        })
  
        res.json(chus)
  }