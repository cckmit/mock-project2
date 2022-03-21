package nts.uk.ctx.sys.gateway.app.command.login.password.userpassword;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import javax.ejb.Stateless;
import javax.inject.Inject;

import lombok.val;
import nts.arc.error.BundledBusinessException;
import nts.arc.error.BusinessException;
import nts.arc.layer.app.command.CommandHandler;
import nts.arc.layer.app.command.CommandHandlerContext;
import nts.arc.task.tran.TransactionService;
import nts.uk.ctx.sys.gateway.dom.login.password.userpassword.ChangeLoginPasswordOfUser;
import nts.uk.ctx.sys.shared.dom.user.User;
import nts.uk.ctx.sys.shared.dom.user.UserRepository;
import nts.uk.shr.pereg.app.command.MyCustomizeException;
import nts.uk.shr.pereg.app.command.PeregUpdateCommandHandler;

/**
 * @author huylq
 * 管理者がパスワードを変更する
 */
@Stateless
public class UpdateEmpLoginPasswordCommandHandler extends CommandHandler<UpdateEmpLoginPasswordCommand> 
	implements PeregUpdateCommandHandler<UpdateEmpLoginPasswordCommand>{

	@Inject
	private ChangeLoginPasswordCommandRequire requireProvider;
	
	@Inject
	private TransactionService transaction;
	
	@Inject
	private UserRepository userRepo;
	
	@Override
	public String targetCategoryCd() {
		return "CS00100";
	}

	@Override
	public Class<?> commandClass() {
		return UpdateEmpLoginPasswordCommand.class;
	}
	
	@Override
	protected void handle(CommandHandlerContext<UpdateEmpLoginPasswordCommand> context) {
		try {
			val require = requireProvider.create();
			val command = context.getCommand();
			
			Optional<User> userOpt = userRepo.getByAssociatedPersonId(command.getPersonId());
			
			if (userOpt.isPresent()) {
				val atomTask = ChangeLoginPasswordOfUser.change(require, userOpt.get().getUserID(), command.getPassword());
				
				transaction.execute(atomTask);
			}
		} catch(BundledBusinessException bundledEx) {
			List<BusinessException> exList = bundledEx.cloneExceptions();
			if (exList.size() > 1) {
				throw bundledEx;
			} else if (exList.size() > 0) {
				throw exList.get(0);
			}
		}
	}
	
}
