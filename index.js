const fs = require("fs");
const path = require("path");

function main() {
    // NFT 이미지 갯수에 맞게 for문 설정
    for (let i = 1; i < 4; i++) {

        // 저장 위치 및 MetaData 파일명 설정
        // {프로젝트 위치}/testNFT/metadatas/my_cat_metadata_{i}.json
        const metadatasDir = path.join(__dirname, "metadatas", `my_cat_metadata_${i}.json`);

        // IPFS 이미지 폴더 링크
        const ipfsPash = 'ipfs://QmZHitDaVkRcchGwneThYs8a2FLgXMB5SKW7KR2eKQxUQ5';

        // ERC721 MetaData 규칙에 맞게 json 생성
        const metadata_json = {
            name: `my cat #${i}`,
            description: `stupid cat #${i}`,
            image: `${ipfsPash}/my_cat_${i}.jpg`
        }
        // 각 NFT에 옵션 추가 (선택사항)
        metadata_json['attributes'] = [
            {
                "trait_type": "Level",
                "value": Math.floor(Math.random() * 11)
            },
            {
                "trait_type": "Stamina",
                "value": Math.floor(Math.random() * 11)
            }
        ];

        // MetaData 파일 생성
        fs.writeFileSync(metadatasDir, JSON.stringify(metadata_json));

    }
}

main();