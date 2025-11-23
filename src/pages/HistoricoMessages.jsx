import { useChatData } from '../hooks/useChatData';


const HistoryScreen = ({ currentUserProfile }) => {
  const { messages, isLoading, error } = useChatData(currentUserProfile);
  
  return (
    <div className="p-6 bg-white overflow-y-auto h-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Histórico de Atendimento ({`Usuário ${currentUserProfile}`})
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Este histórico exibe todas as mensagens vinculadas ao perfil atualmente selecionado, obtidas do backend Django.
      </p>

      {isLoading ? (
        <div className="text-center text-gray-500 py-10">Carregando histórico...</div>
      ) : error ? (
        <div className="text-center text-red-500 py-10 border rounded-lg">{error}</div>
      ) : messages.length === 0 ? (
        <div className="text-center text-gray-500 py-10 border rounded-lg">
          Nenhum histórico encontrado para o Usuário {currentUserProfile}.
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`p-4 rounded-lg shadow-sm border ${msg.sender === 'Backend' ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'}`}
            >
              <div className="flex justify-between items-center mb-1 text-sm">
                <span className={`font-semibold ${msg.sender === 'Backend' ? 'text-blue-700' : 'text-indigo-700'}`}>
                  {msg.sender === 'Backend' ? 'Atendente Simulado' : `Usuário ${msg.sender}`}
                </span>
                <span className="text-gray-500">
                  {msg.timestamp.toLocaleString('pt-BR')}
                </span>
              </div>
              <p className="text-gray-700 whitespace-pre-wrap">{msg.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HistoryScreen;