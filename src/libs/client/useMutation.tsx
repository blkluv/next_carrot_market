import { useState } from "react";

export default function useMutation(url: string) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<undefined | any>(undefined);
  function mutation(data: any) {
    return [mutation];
  }
}
