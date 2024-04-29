# Análise de Código do Codescale

## Pontos Fortes do Código

- Injeção de Dependência nos Use Cases
- Boa implementação do padrão Repository
- Ótima forma de criar independência da API (Faker pode ser substituido por outra tecnologia sem precisar refatorar o código)
- Boa separação de componentes nas pastas `/ui` e `/components`

## Pontos a melhorar

- Entidades anêmicas sem regras de negócio (apesar de ser frontend) *
- A validação dos campos está acoplada com o React, o ideal é que fosse feito nas Entidades
- Utilizar entidades para fazer operações no repositório, evitar criar novos tipos como `ListParams` e `UpdateInventory`
- Colocaria o Router na pasta frameworks ao invés de adapters, porque faz parte do React
