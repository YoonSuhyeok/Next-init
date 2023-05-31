import { useReadMakrget } from "@/server/useReadMarket";
import { useRouter } from "next/router";

function MarketId() {
    const router = useRouter();
    const id = router.query.id;
    
    const { isLoading, data } = useReadMakrget(+id!);
    
    return (
        <div className="h-100px w-100px">{isLoading ? 
        <div>HI</div> :
         <div>{data!.id}</div>}</div>
    );
}

export default MarketId;